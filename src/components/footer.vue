<template>
    <section class="footer-main">
        <h6>Fundacja Absolwentów Informatyki Uniwersytetu Wrocławskiego</h6>
        <div class="footer-mid">
            <div class="footer-el">
                <div class="footer-el-wrapper">
                    <h5>Dane adresowe</h5>
                    <p>Fundacja Absolwentów Informatyki Uniwersytetu Wrocławskiego</p>
                    <p>ul. Joliot-Curie 15</p>
                    <p>50-523 Wrocław</p>
                    <p>fundacja_abs@uwr.edu.pl</p>
                </div>
            </div>
            <div class="footer-el">
                <div class="footer-el-wrapper">
                    <h5>Dane rejestrowe</h5>
                    <p>KRS 123431</p>
                    <p>NIP 3453412</p>
                    <p>REGON 5438123</p>
                </div>
            </div>
            <div class="footer-el">
                <div class="footer-el-wrapper">
                    <h5>Dane bankowe</h5>
                    <p>PKO BP</p>
                    <p>12 5483 9349 2103 5842 3931</p>
                </div>
            </div>
            <div class="footer-el">
                <div class="footer-el-wrapper">
                    <h5>Odnośniki</h5>
                    <p><a href="/raport">RAPORT</a></p>
                    <p><a href="/darczyncy">DARCZYŃCY</a></p>
                    <p><a href="/wesprzyj">WESPRZYJ FUNDACJĘ</a></p>
                    <p><a href="/statut">STATUT FUNDACJI</a></p>
                    <p><a href="/kontakt">SKONTAKTUJ SIĘ Z NAMI</a></p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">

.footer-el-wrapper > h5 {
    color: #B60D18;
    font-size: 17px;
    margin-bottom: 5px;
}

.footer-el {
    margin-bottom: 20px;
    font-size: 15px;
}

.footer-el-wrapper > p {
    line-height: 28px;
}

.footer-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid rgb(202, 202, 202);
    padding-top: 20px;
    background-color: #fff;
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
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.footer-mid ul {
    display: grid;
    grid-template-columns: repeat(2, 45vw [col-start]);
    grid-template-rows: 50px 50px; 
    justify-content: center;   
    align-items: center;
    line-height: 15px;
}

span {
    color: rgb(181, 13, 24);
}


@media (max-width: 400px) {
    .footer-main {
        font-size: 14px;
    }
}

@media (min-width: 1200px) {
    .footer-main {
        font-size: 18px;
    }
    .footer-top ul {
        grid-template-columns: repeat(2, 20vw [col-start]);
    }
    .footer-mid {
        grid-template-columns: repeat(2, 20vw [col-start]);
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
    }
    .footer-el {
        max-width: 300px;
        margin: 30px 30px;
        text-align: start;
        width: 17vw;
        display: flex;
        justify-content: center;
    }

    .footer-main > h6 {
        font-size: 14px;
    }

    .footer-el-wrapper > h5 {
        font-size: 24px;
    }
    .footer-el {
        font-size: 16px;
    }
}

@media (min-width: 1600px) {
    .footer-main {
        font-size: 21px;
    }

    .footer-main > h6 {
        font-size: 16px;
    }
    .footer-top ul {
        grid-template-columns: repeat(2, 15vw [col-start]);
    }
    .footer-mid ul {
        grid-template-columns: repeat(2, 15vw [col-start]);
    }
}

@media (min-width: 3000px) {
    .footer-main > h6 {
        font-size: 32px;
    }
    .footer-el-wrapper > h5 {
        font-size: 48px;
    }
    .footer-el {
        font-size: 32px;
        width: 25vw;
        max-width: 600px;
    }

    .footer-el-wrapper > p {
        line-height: 50px;;
    }
}

</style>