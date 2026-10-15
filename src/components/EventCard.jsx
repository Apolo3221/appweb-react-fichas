function EventCard({ id, title, location, startsAt, available, onRegister }) {
    const soldOut = available === 0
    return (
        <article className="event-card">
            <h2>{title}</h2>
            {soldOut && <span className="badge">Esgotado</span>}
            <p>{location}</p>
            <p>{startsAt}</p>
            <p>{available} lugares disponíveis</p>
            <button onClick={() => onRegister(id)} disabled={soldOut}>
                {soldOut ? 'Sem lugares' : 'Inscrever'}
            </button>
        </article>
    )
}
export default EventCard
