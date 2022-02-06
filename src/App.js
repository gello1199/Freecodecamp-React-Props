import React from 'react';
import Contact from './components/Contact';

const App = () => {
    return (
        <div className="contacts">
        
           <Contact 
           img="https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
           name="Mr. Whiskerson"
           phone="123-456-7890"
           email="mr.whiskaz@catnap.meow"
            />
           <Contact  
            img="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            name="Fluffykins"
            phone="(212) 555-2345"
            email="fluff@me.com"
           />
           <Contact 
            img="https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            name="Felix"
            phone="(212) 555-4567"
            email="thecat@hotmail.com"
           />
           <Contact 
            img="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2F0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            name="Pumpkin"
            phone="(800) CAT KING"
            email="pumpkin@scrimba.com"
           />
            
        </div>
    );
}

export default App;