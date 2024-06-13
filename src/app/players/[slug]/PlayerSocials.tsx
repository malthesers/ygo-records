import ExternalLink from '@/components/layout/ExternalLink'
import { ISocials } from '@/interfaces/player'
import { FaTwitch, FaXTwitter, FaYoutube } from 'react-icons/fa6'

interface PlayerSocialsProps {
  socials: ISocials
}

export default function PlayerSocials({ socials }: PlayerSocialsProps) {
  return (
    <div className='flex flex-row gap-4'>
      {socials.youtube && (
        <ExternalLink href={'https://youtube.com/@' + socials.youtube}>
          <FaYoutube size='2rem' />
        </ExternalLink>
      )}
      {socials.twitter && (
        <ExternalLink href={'https://twitter.com/' + socials.twitter}>
          <FaXTwitter size='2rem' />
        </ExternalLink>
      )}
      {socials.twitch && (
        <ExternalLink href={'https://twitch.com/' + socials.twitch}>
          <FaTwitch size='2rem' />
        </ExternalLink>
      )}
    </div>
  )
}
