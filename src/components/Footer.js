const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer className='text-center p-3'>
        Crafted and coded by <a className="text-reset" target="_blank" href="https://danielwang.github.io/bio/">Daniel Wang</a>
      </footer>
    </>
  )
}

export default Footer
