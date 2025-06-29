export const maintainersData = [
  { login: 'atomoxide', name: 'Atomoxide' },
]

export interface MaintainersDataInterface {
  name: string
  avatarUrl: string
  login: string
  designation: string
  role: string
  firstLink: string
  firstTxt: string
  secondLink: string
  secondTxt: string
  thirdLink: string
  thirdTxt: string
}

export const Maintainers: MaintainersDataInterface[] = [
  {
    name: 'Atomoxide',
    avatarUrl: 'https://avatars.githubusercontent.com/atomoxide',
    login: 'atomoxide',
    designation: '',
    role: '',
    firstLink: '',
    firstTxt: '',
    secondLink: '',
    secondTxt: '',
    thirdLink: '',
    thirdTxt: '',
  },
]

export interface Contributor {
  twitter_username?: string
  id: number
  avatar_url: string
  name: string
  login: string
  contributions: number
}

export const dummyContributors: Contributor[] = [
  // {
  //   id: 1,
  //   avatar_url: 'https://avatars.githubusercontent.com/u/74038190?v=4',
  //   name: 'John Doe',
  //   login: 'johndoe',
  //   contributions: 15,
  // },
  // {
  //   id: 2,
  //   avatar_url: 'https://avatars.githubusercontent.com/u/74038190?v=4',
  //   name: 'Jane Smith',
  //   login: 'janesmith',
  //   contributions: 10,
  // },
  // {
  //   id: 3,
  //   avatar_url: 'https://avatars.githubusercontent.com/u/74038190?v=4',
  //   name: 'Bob Johnson',
  //   login: 'bobjohnson',
  //   contributions: 5,
  // },
  // {
  //   id: 4,
  //   avatar_url: 'https://avatars.githubusercontent.com/u/74038190?v=4',
  //   name: 'Bob Johnson',
  //   login: 'bobjohnson',
  //   contributions: 5,
  // },
  // {
  //   id: 5,
  //   avatar_url: 'https://avatars.githubusercontent.com/u/74038190?v=4',
  //   name: 'Bob Johnson',
  //   login: 'bobjohnson',
  //   contributions: 5,
  // },
  // {
  //   id: 6,
  //   avatar_url: 'https://avatars.githubusercontent.com/u/74038190?v=4',
  //   name: 'Bob Johnson',
  //   login: 'bobjohnson',
  //   contributions: 5,
  // },
  // {
  //   id: 7,
  //   avatar_url: 'https://avatars.githubusercontent.com/u/74038190?v=4',
  //   name: 'Bob Johnson',
  //   login: 'bobjohnson',
  //   contributions: 5,
  // },
  // {
  //   id: 8,
  //   avatar_url: 'https://avatars.githubusercontent.com/u/74038190?v=4',
  //   name: 'Bob Johnson',
  //   login: 'bobjohnson',
  //   contributions: 5,
  // },
  // {
  //   id: 9,
  //   avatar_url: 'https://avatars.githubusercontent.com/u/74038190?v=4',
  //   name: 'Bob Johnson',
  //   login: 'bobjohnson',
  //   contributions: 5,
  // },
  // {
  //   id: 10,
  //   avatar_url: 'https://avatars.githubusercontent.com/u/74038190?v=4',
  //   name: 'Bob Johnson',
  //   login: 'bobjohnson',
  //   contributions: 5,
  // },
  // {
  //   id: 11,
  //   avatar_url: 'https://avatars.githubusercontent.com/u/74038190?v=4',
  //   name: 'Bob Johnson',
  //   login: 'bobjohnson',
  //   contributions: 5,
  // },
]
