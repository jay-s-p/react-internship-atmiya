

const ProfileContainer = ({ children }) => {
  return (
    <>
      <div style={{ display: "grid" }}>
        <div style={{ border: "2px solid #0000", margin: "3em auto auto auto", width: "100%", maxWidth:"111em" }}>
          {children}
        </div>
      </div>
    </>
  )
}

export default ProfileContainer