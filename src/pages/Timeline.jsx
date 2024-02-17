import { useContext, useEffect, useState } from "react"
import { getTimeline } from "../services/TweetsService";
import Tweet from "../components/Tweet";
import AuthContext from "../contexts/AuthContext";
import Button from "../components/Button";

function removeDuplicates(array) {
  const uniqueArray = [];
  const seenIds = []

  array.forEach((item) => {
    if (seenIds.includes(item.data.id)) {
      // Este no se pushea
    } else {
      uniqueArray.push(item);
      seenIds.push(item.data.id)
    }
  })

  return uniqueArray;
}

const TWEETS_PER_PAGE = 2;

const Timeline = () => {
  const { user } = useContext(AuthContext);
  const [page, setPage] = useState(0);

  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [canShowButton, setCanShowButton] = useState(true);

  useEffect(() => {
    // Petición para traerme la timeline
    getTimeline(page)
      .then(tweetsFromApi => {
        if (tweetsFromApi.length < TWEETS_PER_PAGE) {
          setCanShowButton(false)
        }

        setTweets((prevTweets) => { // En un set, el parametro puede ser una funcion donde el primer argumento es el valor anterior
          return removeDuplicates([...prevTweets, ...tweetsFromApi])
        })
        setLoading(false);
      })
  }, [page])

  const handlePage = () => {
    setPage(page + 1)
    setLoading(true);
  }

  return (
    <div>
      <h1>Aqui ira el input de añadir tweets</h1>

      <div>
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.data.id}
            isLiked={user.data.likes.some(like => like.tweet === tweet.data.id)}
            {...tweet} />
        ))}
        {loading ? <p>Loading...</p> : null }
        {!loading && canShowButton ? (
          <Button text="Get more tweets" extraClassName="mt-3" onClick={handlePage} />
        ) : null}
      </div>
    </div>
  )
}

export default Timeline