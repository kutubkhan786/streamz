import React from 'react'

export default function Footer() {
  const currentTime = new Date();
  const year = currentTime.getFullYear();
  return (
    <>
      <footer>
        <p>Copyright &copy; {year} | Silicon Squad</p>
      </footer>
    </>
  )
};