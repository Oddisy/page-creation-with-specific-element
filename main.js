
        // Function to get the current day of the week
        const getDayOfWeek = () =>  {
            const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const currentDate = new Date();
            const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
            return dayOfWeek;
        }

        // Function to get the current UTC time in milliseconds
        const  getCurrentUTCTime = () =>  {
            const currentTime = new Date().getTime();
            return currentTime;
        }

        // Set the content for the current day of the week and current UTC time elements
        document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Current Day of the Week: ${getDayOfWeek()}`;
        document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time: ${getCurrentUTCTime()} milliseconds`;
