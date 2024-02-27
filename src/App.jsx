import { TwitterFollowCard } from './TwitterFollowCard'
import './app.css'

export function App () {
const format = (userName) => '@${userName}'
    return(
    <section className='App'>
      <TwitterFollowCard formatUsername={format} isFollowing={true} userName="Pepdev" name="Pepe Enrrique Giraldo"/>
      <TwitterFollowCard formatUsername={format} isFollowing={false} userName="Pipdev" name="(otro gemelo malvado)"/>
      <TwitterFollowCard formatUsername={format} isFollowing userName="juan" name="Pepe Enrrique Giraldo"/>
      <TwitterFollowCard formatUsername={format}  isFollowing userName="zago" name="(malvado x2)"/>
    </section>
    )
}

