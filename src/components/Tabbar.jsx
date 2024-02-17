import { useState } from 'react';
import clsx from 'clsx';

const Tabbar = () => {
  const tabs = [
    {
      key: 0,
      title: 'Tweets',
      body: <>Tweets</>
    },
    {
      key: 1,
      title: 'Siguiendo',
      body: <>Siguiendo</>
    },
    {
      key: 2,
      title: 'Seguidores',
      body: <>Seguidores</>
    },
    {
      key: 3,
      title: 'Favoritos',
      body: <>Favoritos</>
    },
  ]

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
        <ul className="flex flex-wrap -mb-px justify-between">
          {
            tabs.map(tab => (
              <li className="me-2" key={tab.key}>
                  <button
                    onClick={() => setActiveTab(tab.key)}
                    className={clsx(
                      "inline-block p-4 border-b-2 border-transparent rounded-t-lg",
                      { "text-tw-primary border-tw-primary": tab.key === activeTab},
                      {"hover:text-gray-600 hover:border-gray-300": tab.key !== activeTab}
                    )}
                  >
                    {tab.title}
                  </button>
              </li>
            ))
          }
        </ul>

      </div>
      <div className="p-4">
        {tabs[activeTab].body}
      </div>
    </div>
  )
}

export default Tabbar;