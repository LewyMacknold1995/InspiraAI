import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <aside className="sidebar">
        <div className="flex size-full flex-col gap-4">
            <Link href="/" className="sidebar-logo">
                <Image src="/assets/image/logo-text.svg" alt="logo" width={180} height={28}/>
            </Link>

        </div>

    </aside>
  )
}

export default Sidebar