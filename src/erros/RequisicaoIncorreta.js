import ErroBase from "./ErroBase.js";

class RequisicaoIncorreta extends ErroBase{
  constructor(mensagem="Um ou mais dados fornecidos estão incorretos"){
    super(mensagem,404);
  }
}
export default RequisicaoIncorreta;