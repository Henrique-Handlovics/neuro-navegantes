export default function WarningBox() {
  return (
    <div className="warning-box" role="note">

      <h3>Atenção</h3>

      <p>Empresas e pessoas de confiança nunca pedem:</p>

      <ul>
        <li>Sua senha</li>
        <li>Códigos que chegam por SMS, e-mail ou aplicativo</li>
        <li>Fotos íntimas ou documentos por mensagem</li>
        <li>Dados do cartão por mensagem</li>
        <li>Que você mantenha segredo de quem cuida de você</li>
      </ul>

      <strong>
        Se alguém pedir uma dessas coisas, pare, não responda e fale com
        uma pessoa de confiança.
      </strong>

      <p className="warning-help">
        Você também pode ligar para o Disque 100, que recebe denúncias de
        violações de direitos. Se estiver com muito sofrimento emocional,
        o CVV atende pelo 188. As duas ligações são gratuitas.
      </p>

    </div>
  );
}
