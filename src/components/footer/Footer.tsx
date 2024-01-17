import styles from './footer.module.css'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="w-full h-14 flex items-center justify-center text-center">
      <p>Made by Ikiwq, 2024. Check out the <a href='https://github.com/ikiwq/blog' target="_blank" rel='noreferr' className='underline'> Github repository.</a></p>
    </footer>
  )
}

export default Footer