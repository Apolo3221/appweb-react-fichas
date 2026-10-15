import Header from './components/Header'
import EventCard from './components/EventCard'
import events from './data/events.json'
import './App.css'
function App() {
  return (
    <>
      <Header />
      <main className="event-list">
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            location={event.location}
            startsAt={event.startsAt}
            available={event.capacity - event.registered}
          />
        ))}
      </main>
    </>
  )
}
export default App
