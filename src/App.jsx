import { useState } from "react";
import Header from "./components/Header";
import EventCard from "./components/EventCard";
import SearchBar from "./components/SearchBar";
import eventsData from "./data/events.json";
import "./App.css";

function App() {
  const [events, setEvents] = useState(eventsData);

  function handleRegister(id) {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === id
          ? { ...event, registered: event.registered + 1 }
          : event,
      ),
    );
  }

  const [search, setSearch] = useState("");

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />

      <SearchBar value={search} onChange={setSearch} />

      <main className="event-list">
        {filteredEvents.length === 0 ? (
          <p>Nenhum evento encontrado.</p>
        ) : (
          filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              location={event.location}
              startsAt={event.startsAt}
              available={event.capacity - event.registered}
              onRegister={handleRegister}
            />
          ))
        )}
      </main>
    </>
  );
}

export default App;