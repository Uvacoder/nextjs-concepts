const DUMMY_EVENTS = [
    {
      id: 'e1',
      title: 'Programming for everyone',
      description:
        'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      location: 'Somestreet 25, 12345 San Somewhereo',
      date: '2021-05-12',
      image: 'images/coding-event.jpg',
      isFeatured: false,
    },
    {
      id: 'e2',
      title: 'Networking for introverts',
      description:
        "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
      location: 'New Wall Street 5, 98765 New Work',
      date: '2021-05-30',
      image: 'images/introvert-event.jpg',
      isFeatured: true,
    },
    {
      id: 'e3',
      title: 'Networking for extroverts',
      description:
        'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
      location: 'My Street 12, 10115 Broke City',
      date: '2022-04-10',
      image: 'images/extrovert-event.jpg',
      isFeatured: true,
    },
  ];


  // get all dummy events
  /** get all featured events
   * @returns {Array} array of featured events
   */
const getFeaturedEvents= ()=>DUMMY_EVENTS.filter(event=>event.isFeatured);

const getEventDetail  = id=>DUMMY_EVENTS.find((event)=>event.id===id);

const getAllEvents = ()=>  DUMMY_EVENTS;

const getFilteredEvents = (year,month)=>{
  return DUMMY_EVENTS.filter(event=>{
    const eDate= new Date(event.date)
    if(eDate.getFullYear() == year && eDate.getMonth()== month ) return true
    else return false
  })
}

export {DUMMY_EVENTS, getFeaturedEvents, getEventDetail , getAllEvents,getFilteredEvents}