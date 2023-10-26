import Profile from './Profile';

export default function Gallery() {
    return (
        <>
            <h1>This is the Gallery</h1>
            <Profile name="Mario" avatar="https://mario.nintendo.com/static/86bd56fed456e9b642100519880b6a86/b3853/mario.png"/>
            <Profile name="Bowser" avatar="https://upload.wikimedia.org/wikipedia/en/9/92/Bowser_Stock_Art_2021.png"/>
            <Profile name="Peach" avatar="https://static.wikia.nocookie.net/supermariobrosfilm/images/d/d8/Princess_Peach_%28NEW%29.png"/>
        </>
    );
}