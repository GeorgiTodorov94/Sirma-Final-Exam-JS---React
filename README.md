Application : European Championship Stats visualizer

My Algorithm :
1. Install Vite
2. Configure dependencies
3. Add basic App Architecture
4. Add General Components
4. (Again 4.) Configure React Router/ Routes
5. Configure Global/Reset.css

6. Create useCSVdata hook to fetch data from any CSV file
7. Parse Data from CSV file by : 
    {
1. Taking the Headlines of each CSV file
2. Mapping the data respective to its Headline
3. .trim() to remove whitespaces, "\n", etc...
4. .split(',') to split strings and return them as Arrays
5. .reduce('') to create a callBack Function structuring the parsed data into Arrays of objects
8. Store the parsed data into the localStorage
9. Data Structure is as Follows : 
    {

1. matches.csv holds data on all the matches played in the tournament
2. players.csv holds data on all the players involved in the tournament
3. teams.csv holds data on all the teams participating in the tournament
4. records.csv holds information about the players, how long they played each match, etc..
    }

    }

10. Add createContext of (data) from each CSV file by making a custom Hook : useData()
11. Add DataContext.jsx to useData() hook to pass the parsed data to all components in the Application so that the data is loaded only once within the Application upon starting the Application and not causing re-renders every time data has to be loaded
12. Envelop all the Application components in DataContext.jsx 
13. Add Brackets/Group Stage component
14. Add Logic to iterate through all the matches mapping them in an Array of Objects based on the group they were in
15. Add Logic to iterate through the matches in the group by match.ID
to find the names of the Football clubs participating in each match 
from teams.csv and return a new Object for each match containing each TeamID corresponding with its club name
16. Create MatchCard.jsx
17. Iterate through all the Groups and the matches to display all the matches according to their group by passing the information to MatchCard.jsx and creating unique card for every match with the correct data
18. Create Field.jsx to display both football fields and display for each match each team on either side. 
19. Add logic again to pass down the correct data for each match.
20. Create FieldA.jsx and FieldB.jsx to display correctly data from each match and its corresponding teams in Field.jsx
21. Create Finals.jsx Component to display the finals
22. Add logic to extract only the matches played in the eight finals, quarter finals, semi finals, and the finals from the array with all the matches.
22. Add logic to divide them in their respective stages of the tournament
22. Display each match and its correct Data in the correct Stage of the tournament by creating FinalCard.jsx and re-using it again in Finals.jsx
23. All the meanwhile making the 'proper' user friendly and very simple CSS and stylization.
24. Add MatchFieldCard.jsx to render in Field.jsx according to the match data requested.


25. Many things left to do:
{
1. Search Filter
2. Cleaning the components of unnecessary code by moving and exporting  functions and logic in separate files and importing them and re-using wherever are needed.
3. Creating custom hook for mapping teams with matches and players and their records, etc...
4. Using createContext to create another useful information
5. Code review on where and what can be written more clean and tidy
And lastly after making the Application clean and tidy -> "\n"
6. Add logic which adds all the data from records.csv to their respective players and displaying it in the Team Details / Match Details components 
}

Thank you.


