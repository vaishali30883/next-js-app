import React from 'react';

function Home({serverTime}) {
    return(
        <div>
            <h1>Server-side Rendering exmple</h1>
            <p>Server time: {serverTime}</p>
        </div>
    );

}

export async function getServerSideProps(){
    const serverTime = new Date().toString();
    return{props: {serverTime}};
    }

    export default Home;