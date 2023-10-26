import Profile from './Profile';

const character = {
    name: 'Earthworm Jim',
    theme: {
        backgroundColor: 'teal',
        color: 'black'
    }
}

export default function TodoList() {
    return(
        <div style={character.theme}>
            <h1>{character.name}'s Todos</h1>
            <Profile />
            <ul>
                <li>Shoot crows</li>
                <li>Save princess</li>
                <li>Launch cows</li>
            </ul>
        </div>
    );
}