document.addEventListener('DOMContentLoaded', function () {
    const calendarDates = document.getElementById('calendarDates');
    const monthYear = document.getElementById('monthYear');
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');
  
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
  
    function renderCalendar(month, year) {
      calendarDates.innerHTML = '';
      
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      
      // Fill empty spots before the first day
      for (let i = 0; i < firstDay; i++) {
        calendarDates.innerHTML += '<div class="day"></div>';
      }
      
      // Fill in the days of the month
      for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = day;
  
        // Highlight today's date
        if (day === currentDate.getDate() && month === currentDate.getMonth() && year === currentDate.getFullYear()) {
          dayElement.classList.add('today');
        }
  
        calendarDates.appendChild(dayElement);
      }
  
      monthYear.textContent = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;
    }
  
    // Event Listeners for Navigation
    prevMonthBtn.addEventListener('click', function () {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      renderCalendar(currentMonth, currentYear);
    });
  
    nextMonthBtn.addEventListener('click', function () {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      renderCalendar(currentMonth, currentYear);
    });
  
    renderCalendar(currentMonth, currentYear);
  });
  