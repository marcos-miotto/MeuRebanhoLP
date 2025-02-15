import Check from "../assets/images/Check.svg"
import CowboyFemale from "../assets/images/femaleCowboy.jpg";
import HeroCowImage from "../assets/images/heroImg.svg";
import CowboyMale from "../assets/images/maleCowbow.jpg";
import HeroRectangleTwo from "../assets/images/rectangleTwo.svg";
import Button from "../components/Button";
import Card from "../components/Cards";
import ContactEmail from "../components/contactEmail";
import UserFeedback from "../components/UserFeedback";
import "../styles/pricing.css"
import "../styles/hero.css";
import "../styles/utility.css";

export default function Home() {
    return (
        <>
            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" className="borderImg" />
                </span>
                <div className="content">
                    <h1>Gestão reprodutiva completa e eficiente para gado leiteiro</h1>
                    <p>
                        Otimize a reprodução e o manejo do seu gado leiteiro com nossa solução completa de controle
                        reprodutivo. Acompanhe a saúde e a produtividade dos animais de forma prática e eficiente.
                    </p>
                    <div>
                        <div style={{ width: 300 }}>
                            <Button text="Cadastre-se" />
                        </div>
                        <div style={{ width: 300 }}>
                            <Button text="Veja mais" secondary />
                        </div>
                    </div>
                </div>
                <img src={HeroCowImage} alt="Imagem no quadrante da direita" className="heroImg" />
            </section>
            <section id="cards" className="container">
                <h2>Nossos Serviços</h2>
                <div className="card-container">
                    <Card
                        title="Monitoramento Reprodutivo"
                        description="Com o serviço de Monitoramento Reprodutivo, você acompanha de forma precisa e automatizada o ciclo reprodutivo do seu rebanho. Nosso sistema permite registrar e rastrear informações importantes como a identificação de cio, inseminações, partos e histórico reprodutivo de cada animal. Assim, você otimiza o manejo, aumenta as chances de sucesso nas inseminações e garante a saúde do rebanho. Tudo isso, com notificações personalizadas para facilitar a tomada de decisão no momento certo."
                    />
                    <Card
                        title="Gestão de Nutrição"
                        description="A Gestão de Nutrição do seu rebanho fica mais eficiente e simplificada com nosso sistema. Registre e acompanhe a dieta de cada animal, controle a quantidade de ração, suplementos e pastagem, e receba sugestões de ajustes com base nas necessidades nutricionais e produtividade de cada fase. Mantenha seus animais saudáveis, maximizando a produção de leite, reduzindo desperdícios e garantindo uma alimentação balanceada de forma prática e automatizada."
                    />
                    <Card
                        title="Relatórios e Análises"
                        description="Com o Relatórios e Análises, você tem uma visão completa e detalhada do desempenho do seu rebanho. Gere relatórios personalizados sobre produção de leite, saúde, reprodução, nutrição e outros indicadores importantes. Utilize gráficos e análises inteligentes para tomar decisões informadas e melhorar a gestão do seu negócio. Nossa ferramenta transforma dados em insights, facilitando o acompanhamento de metas e ajudando a identificar áreas de melhoria."
                    />
                </div>
            </section>
            <section id="feedback" className="feedback-container">
                <h2>O que nossos clientes dizem</h2>
                <div className="feedback-grid">
                    <UserFeedback
                        imgSrc={CowboyMale}
                        name="João da Silva"
                        feedback="Esse aplicativo revolucionou a forma como gerencio minha fazenda, otimizando todo o processo reprodutivo."
                    />
                    <UserFeedback
                        imgSrc={CowboyFemale}
                        name="Ana Pereira"
                        feedback="Com o controle nutricional e relatórios detalhados, meu trabalho ficou muito mais fácil e eficiente."
                    />
                </div>
            </section>
            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos planos</h2>
                </header>
                <section className="even-columns gap-1.5">
                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Básico</h3>
                            <p>Você tem direito a uma prova das comidas DonaFrost.</p>
                        </span><h2>Grátis</h2><Button text="Pedir agora" secondary key="free" /><span className="hr" /><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Retire na loja</p>
                        </span><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Apenas 1 por CPF</p>
                        </span>
                    </div>
                    <div className="pricing-card premium">
                        <span className="bonus"><p>1º MÊS COM DESCONTO</p></span><span className="plan">
                            <h3>Premium</h3>
                            <p>Para quem precisa de uma marmita diária, muito saborosa.</p>
                        </span><span className="price">
                            <h2>R$ 89,90</h2>
                            <p>/mês</p>
                        </span><Button text="Pedir agora" key="premium" /><span className="hr" /><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>2 Entregas</p>
                        </span><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>5 Refeições por semana</p>
                        </span><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>2 Sucos por semana</p>
                        </span>
                    </div>
                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Básico</h3>
                            <p>Você tem direito a uma prova das comidas DonaFrost.</p>
                        </span><h2>Grátis</h2><Button text="Pedir agora" secondary key="free" /><span className="hr" /><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Retire na loja</p>
                        </span><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Apenas 1 por CPF</p>
                        </span>
                    </div>
                </section>
            </section>
            < ContactEmail />
        </>
    );
}
