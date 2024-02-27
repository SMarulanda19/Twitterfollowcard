import { TwitterFollowCard } from './TwitterFollowCard';
import './app.css';

export function App() {
    const format = (userName) => `@${userName}`;
    return (
        <section className='App'>
            <TwitterFollowCard formatUsername={format} isFollowing={true} userName="Pepdev" name="Santiago Quintero Marulanda" />
            <TwitterFollowCard formatUsername={format} isFollowing={false} userName="Pipdev" name="un gemelo malvado >:>" />
            <TwitterFollowCard formatUsername={format} isFollowing={true} userName="juan" name="Santiago Marulanda" />
            <TwitterFollowCard formatUsername={format} isFollowing={true} userName="zago" name="(malvado x2)" />
        </section>
    );
}
