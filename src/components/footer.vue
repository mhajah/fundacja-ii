<template>
    <section class="footer-main">
        <h6>Fundacja Absolwentów Informatyki Uniwersytetu Wrocławskiego</h6>
        <div class="footer-top">
            <ul>
                <li><a href="">RAPORT</a></li>
                <li><a href="">DARCZYŃCY</a></li>
                <li><a href="">WESPRZYJ</a></li>
                <li><a href="">STATUS</a></li>
                <li><a href="">KONTAKT</a></li>
            </ul>
        </div>
        <hr>
        <div class="footer-mid">
            <ul>
                <li>
                    <span>KRS</span> 123412312
                </li>
                <li>
                    <span>NIP</span> 123412312
                </li>
                <li>
                    <span>REGON</span> 123412312
                </li>
                <li>
                    <span>@</span> fundacja@edu.uwr.pl
                </li>
            </ul>
        </div>
        <div class="footer-bot">
            
        </div>
    </section>
</template>

<style scoped lang="scss">

.footer-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid rgb(202, 202, 202);
    padding-top: 20px;
}

h6 {
    text-align: center;
    color: rgb(108, 108, 108);
    font-size: 12px;
}

hr {
    width: 80%;
}

.footer-top {
    margin: 10px 55px 10px 55px;
    font-size: 1rem;
    text-align: center;
}

.footer-top ul {
    display: grid;
    grid-template-columns: repeat(2, 40vw [col-start]);
    grid-template-rows: 35px 35px 35px; 
    justify-content: center;   
    align-items: center;
}

.footer-mid {
    margin: 10px 55px 10px 55px;
    font-size: 1rem;
    text-align: center;
}

.footer-mid ul {
    display: grid;
    grid-template-columns: repeat(2, 40vw [col-start]);
    grid-template-rows: 50px 50px; 
    justify-content: center;   
    align-items: center;
    line-height: 15px;
}

span {
    color: rgb(181, 13, 24);
}

</style>