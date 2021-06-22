const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer className='text-end'>
        <a target="_blank" href="https://danielwang.github.io/bio/">Daniel Wang</a> {year}
      </footer>
    </>
  )
}

export default Footer
