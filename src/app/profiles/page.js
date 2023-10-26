import Profile from "./components/Profile";

export default function Gallery() {
    const name = "Earthworm Jim";
    return(
        <section>
            <h1>This is {name}</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    )
}
