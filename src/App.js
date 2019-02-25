import React from 'react';
import Autocomplete from './Autocomplete';

const App = () => {
    return (
        <div className="App">
            <Autocomplete
                options={[
                    "area",
                    "book",
                    "business",
                    "case",
                    "child",
                    "company",
                    "country",
                    "day",
                    "eye",
                    "fact",
                    "family",
                    "government",
                    "group",
                    "hand",
                    "home",
                    "job",
                    "life",
                    "lot",
                    "man",
                    "money",
                    "month",
                    "mother",
                    "Mr",
                    "night",
                    "number",
                    "part",
                    "people",
                    "place",
                    "point",
                    "problem",
                    "program",
                    "question",
                    "right",
                    "room",
                    "school",
                    "state",
                    "story",
                    "student",
                    "study",
                    "system",
                    "thing",
                    "time",
                    "water",
                    "way",
                    "week",
                    "woman",
                    "word",
                    "work",
                    "world",
                    "year"
                ]}
            />
        </div>
    );
}

export default App;
