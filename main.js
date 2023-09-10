
        // Function to get the current day of the week using date api
        const getDayOfWeek = () =>  {
            const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const currentDate = new Date();
            const weekDay = weekDays[currentDate.getUTCDay()];
            return weekDay;
        }

        // Function to get the current UTC time in milliseconds
        const  getCurrentTime = () =>  {
            const currentTime = new Date().getTime();
            return currentTime;
        }

        // render the content for the current day of the week and current UTC time elements
        document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Today is : ${getDayOfWeek()}`;
        document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time: ${getCurrentTime()} milliseconds`;
setInterval(() => {
    getCurrentTime()
}, 100);