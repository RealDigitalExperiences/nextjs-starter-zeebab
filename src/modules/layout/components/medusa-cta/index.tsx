const MedusaCTA = () => {
  return (
    <div className="py-4 flex justify-center items-center w-full">
      <div className="content-container flex justify-center flex-1">
        <a href="https://zeebab.co.za" target="_blank" rel="noreferrer">
          <PoweredBy />
        </a>
      </div>
    </div>
  )
}

const PoweredBy = () => {
  return <span>Powered by zeebab</span>
}

export default MedusaCTA
