import { IDBData, IData, ISidebar } from '../types'
import * as DB from 'database'
import { v4 as uuidv4 } from 'uuid'
export const database: IData[][] = Object.values(DB).map((item: IDBData[]) =>
  item.map((subcat: IDBData) => ({ ...subcat, id: uuidv4() }))
)
export const sidebarData: ISidebar[] = [
  {
    category: 'guide',
    subcategory: [
      { name: 'web_guide', url: '/web_guide', resources: DB.webGuide },
      { name: 'video_guide', url: '/video_guide', resources: DB.videoGuide }
    ]
  },
  {
    category: 'gear',
    subcategory: [
      { name: 'gear_build', url: '/gear_build', resources: DB.gearBuild },
      { name: 'loot_schedule', url: '/loot_schedule', resources: DB.lootSchedule }
    ]
  },
  {
    category: 'tool',
    subcategory: [
      { name: 'info', url: '/info', resources: DB.info },
      { name: 'official', url: '/official', resources: DB.official },
      { name: 'plugin', url: '/plugin', resources: DB.plugin }
    ]
  },
]

export const subCategories = sidebarData.flatMap(({ category, subcategory }) =>
  subcategory.map(({ url }) => ({
    category,
    subcategory: url.replace('/', ''),
  }))
)

export const searchOptions = sidebarData.flatMap(({ category, subcategory }) =>
  subcategory.map((subcat) => ({
    ...subcat,
    category,
  }))
)
