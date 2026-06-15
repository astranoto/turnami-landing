const days = [
  { d: 'Lun', n: '10', items: ['Cucina · 11:30', 'Cassa · 18:00'] },
  { d: 'Mar', n: '11', items: ['Banco · 12:00'] },
  { d: 'Mer', n: '12', items: ['Pulizie · 08:00', 'Cena · 19:00'] },
  { d: 'Gio', n: '13', items: ['Team · 10:30'] },
  { d: 'Ven', n: '14', items: ['Pranzo · 11:00', 'Cena · 18:30'] },
  { d: 'Sab', n: '15', items: ['Extra · 17:00'] }
];

export default function CalendarMockup() {
  return (
    <div className="mockup-card" aria-label="Anteprima calendario Turnami">
      <div className="mockup-topbar">
        <div>
          <span className="mockup-kicker">Settimana corrente</span>
          <h3>Copertura turni</h3>
        </div>
        <span className="status-pill green">Coperto</span>
      </div>
      <div className="stats-row">
        <div><strong>128h</strong><span>ore mese</span></div>
        <div><strong>24</strong><span>turni</span></div>
        <div><strong>3</strong><span>sedi</span></div>
      </div>
      <div className="calendar-grid">
        {days.map((day) => (
          <div className="day-card" key={day.n}>
            <div className="day-head"><span>{day.d}</span><strong>{day.n}</strong></div>
            {day.items.map((item, index) => (
              <span className={`shift shift-${index + 1}`} key={item}>{item}</span>
            ))}
          </div>
        ))}
      </div>
      <div className="mockup-footer">
        <span className="status-pill">Bozza</span>
        <span className="status-pill cyan">Pubblicato</span>
        <span className="status-pill amber">Modificato</span>
      </div>
    </div>
  );
}
