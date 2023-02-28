const Circles = () => (
    <>
        <div className='w-52 h-64 rounded-full absolute bg-gradient-to-t from-violet-500 to-fuchsia-500 blur-2xl z-0' style={{ right: -160, top: 100 }} />
        <div className='w-52 h-64 absolute bg-gradient-to-b from-violet-300 to-fuchsia-500 blur-2xl z-0' style={{ right: 200, top: 300 }} />
        <div className='w-52 h-64 absolute bg-gradient-to-l from-violet-200 to-fuchsia-500 blur-2xl z-0' style={{ right: 200, top: -200 }} />
        <div className='w-52 h-64 rounded-full absolute bg-gradient-to-t from-violet-50 to-fuchsia-500 blur-2xl z-0' style={{ left: 200, top: -100 }} />
        <div className='w-52 h-64 rounded-full absolute bg-gradient-to-b from-violet-800 to-fuchsia-500 blur-2xl z-0' style={{ left: 100, bottom: -200 }} />
        <div className='w-52 h-64 rounded-full absolute bg-gradient-to-l from-violet-500 to-fuchsia-500 blur-2xl z-0' style={{ right: -100, top: 480 }} />
    </>
)

export default Circles;