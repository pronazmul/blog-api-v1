// Initialize Module
const UserConst = {}

UserConst.searchOptions = ['name', 'bio', 'username', 'address.city']
UserConst.sortOptions = [
  'name',
  'dob',
  'following',
  'followers',
  'address.city',
]
UserConst.filterOptions = ['address.city', 'username', 'active']

UserConst.userData = [
  {
    role: '64c3970fbff362b59eaa7296',
    name: 'Nazmul Huda',
    email: 'nazmul@gmail.com',
    username: 'nazmul',
    password: 'Password@1234',
    avatar: 'demo.png',
    phone: '01746000000',
    dob: '1999-10-14T00:00:00.000Z',
    bio: 'Dynamic Response Facilitator',
    followers: 15,
    following: 15,
    address: {
      postCode: '1207',
      city: 'Dhaka',
      country: 'Bangladesh',
    },
    active: true,
  },
  {
    role: '64c3970fbff362b59eaa7298',
    name: 'Sumit Saha',
    email: 'sumit@gmail.com',
    username: 'sumit',
    password: 'Password@1234',
    avatar: 'demo.png',
    phone: '01746000001',
    dob: '1991-03-04T00:00:00.000Z',
    bio: 'Senior Metrics Associate',
    followers: 15,
    following: 15,
    address: {
      postCode: '1230',
      city: 'Chittagong',
      country: 'Bangladesh',
    },
    active: true,
  },
  {
    role: '64c3970fbff362b59eaa7296',
    name: 'Jhanker Mahabub',
    email: 'jhankar@gmail.com',
    username: 'jhankar',
    password: 'Password@1234',
    avatar: 'demo.png',
    phone: '01746000002',
    dob: '1998-03-15T00:00:00.000Z',
    bio: 'Legacy Quality Associate',
    followers: 15,
    following: 15,
    address: {
      postCode: '1650',
      city: 'Rajshahi',
      country: 'Bangladesh',
    },
    active: true,
  },
  {
    role: '64c3970fbff362b59eaa7298',
    name: 'Brad Traversy',
    email: 'traversy@gmail.com',
    username: 'traversy',
    password: 'Password@1234',
    avatar: 'demo.png',
    phone: '01746000003',
    dob: '1952-10-02T00:00:00.000Z',
    bio: 'Regional Research Specialist',
    followers: 15,
    following: 15,
    address: {
      postCode: '3100',
      city: 'Khulna',
      country: 'Bangladesh',
    },
    active: true,
  },
  {
    role: '64c3970fbff362b59eaa7296',
    name: 'Fayzul Karim',
    email: 'fayzul@gmail.com',
    username: 'fayzul',
    password: 'Password@1234',
    avatar: 'demo.png',
    phone: '01746000004',
    dob: '1968-09-11T00:00:00.000Z',
    bio: 'Principal Tactics Liaison',
    followers: 15,
    following: 15,
    address: {
      postCode: '2200',
      city: 'Sylhet',
      country: 'Bangladesh',
    },
    active: true,
  },
  {
    role: '64c3970fbff362b59eaa7298',
    name: 'Sunny Sungha',
    email: 'sunny@gmail.com',
    username: 'sunny',
    password: 'Password@1234',
    avatar: 'demo.png',
    phone: '01746000005',
    dob: '1999-09-09T00:00:00.000Z',
    bio: 'Customer Communications Specialist',
    followers: 15,
    following: 15,
    address: {
      postCode: '1216',
      city: 'Dhaka',
      country: 'Bangladesh',
    },
    active: true,
  },
  {
    role: '64c3970fbff362b59eaa7298',
    name: 'Adrian Twrag',
    email: 'adrian@gmail.com',
    username: 'adrian',
    password: 'Password@1234',
    avatar: 'demo.png',
    phone: '01746000006',
    dob: '1981-05-30T00:00:00.000Z',
    bio: 'Forward Data Facilitator',
    followers: 15,
    following: 15,
    address: {
      postCode: '4000',
      city: 'Barisal',
      country: 'Bangladesh',
    },
    active: true,
  },
  {
    role: '64c3970fbff362b59eaa7297',
    name: 'Tanvir Hasan',
    email: 'tanvir@gmail.com',
    username: 'tanvir',
    password: 'Password@1234',
    avatar: 'demo.png',
    phone: '01746000007',
    dob: '1955-07-30T00:00:00.000Z',
    bio: 'Chief Program Developer',
    followers: 15,
    following: 15,
    address: {
      postCode: '1310',
      city: 'Narayanganj',
      country: 'Bangladesh',
    },
    active: true,
  },
  {
    role: '64c3970fbff362b59eaa7296',
    name: 'Hasin Hayder',
    email: 'hasin@gmail.com',
    username: 'hasin',
    password: 'Password@1234',
    avatar: 'demo.png',
    phone: '01746000008',
    dob: '1977-07-17T00:00:00.000Z',
    bio: 'Dynamic Division Supervisor',
    followers: 15,
    following: 15,
    address: {
      postCode: '4700',
      city: 'Rangpur',
      country: 'Bangladesh',
    },
    active: true,
  },
  {
    role: '64c3970fbff362b59eaa7297',
    name: 'Rashadul Alam',
    email: 'rashadul@gmail.com',
    username: 'rashadul',
    password: 'Password@1234',
    avatar: 'demo.png',
    phone: '01746000009',
    dob: '1969-03-01T00:00:00.000Z',
    bio: 'Direct Markets Specialist',
    followers: 15,
    following: 15,
    address: {
      postCode: '7700',
      city: 'Dinajpur',
      country: 'Bangladesh',
    },
    active: true,
  },
  {
    role: '64c3970fbff362b59eaa7298',
    name: 'Hafizul Hayder',
    email: 'hafuzul@gmail.com',
    username: 'hafuzul',
    password: 'Password@1234',
    avatar: 'demo.png',
    phone: '01746000010',
    dob: '1967-12-23T00:00:00.000Z',
    bio: 'Forward Solutions Planner',
    followers: 15,
    following: 15,
    address: {
      postCode: '3450',
      city: 'Comilla',
      country: 'Bangladesh',
    },
    active: true,
  },
  {
    role: '64c3970fbff362b59eaa7299',
    name: 'Tonmoy',
    email: 'tonmoy@gmail.com',
    username: 'tonmoy',
    password: 'Password@1234',
    avatar: 'demo.png',
    phone: '01746000011',
    dob: '1958-10-23T00:00:00.000Z',
    bio: 'District Mobility Manager',
    followers: 15,
    following: 15,
    address: {
      postCode: '5400',
      city: 'Jessore',
      country: 'Bangladesh',
    },
    active: true,
  },
  {
    role: '64c3970fbff362b59eaa7298',
    name: 'Abdul Ahad',
    email: 'ahad@gmail.com',
    username: 'ahad',
    password: 'Password@1234',
    avatar: 'demo.png',
    phone: '01746000012',
    dob: '1977-12-15T00:00:00.000Z',
    bio: 'Human Group Coordinator',
    followers: 15,
    following: 15,
    address: {
      postCode: '6000',
      city: "Cox's Bazar",
      country: 'Bangladesh',
    },
    active: true,
  },
  {
    role: '64c3970fbff362b59eaa7298',
    name: 'Mr Alauddin',
    email: 'alauddin@gmail.com',
    username: 'alauddin',
    password: 'Password@1234',
    avatar: 'demo.png',
    phone: '01746000013',
    dob: '1962-12-02T00:00:00.000Z',
    bio: 'Forward Optimization Executive',
    followers: 15,
    following: 15,
    address: {
      postCode: '1230',
      city: 'Dhaka',
      country: 'Bangladesh',
    },
    active: true,
  },
  {
    role: '64c3970fbff362b59eaa7298',
    name: 'Hafuzur Babu',
    email: 'babu@gmail.com',
    username: 'babu',
    password: 'Password@1234',
    avatar: 'demo.png',
    phone: '01746000014',
    dob: '1968-05-27T00:00:00.000Z',
    bio: 'Legacy Identity Representative',
    followers: 15,
    following: 15,
    address: {
      postCode: '8100',
      city: 'Noakhali',
      country: 'Bangladesh',
    },
    active: true,
  },
  {
    role: '64c3970fbff362b59eaa7298',
    name: 'Jahid Hasan',
    email: 'jahid@gmail.com',
    username: 'jahid',
    password: 'Password@1234',
    avatar: 'demo.png',
    phone: '01746000016',
    dob: '1968-07-12T00:00:00.000Z',
    bio: 'National Functionality Supervisor',
    followers: 15,
    following: 15,
    address: {
      postCode: '6600',
      city: 'Narail',
      country: 'Bangladesh',
    },
    active: true,
  },
]
export default UserConst
