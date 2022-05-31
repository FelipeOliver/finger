# Resumo

Nome: Finger
Problema: Ao utilizar aplicativos de controle financeiro por mais de 8 anos, verifiquei que não existiam aplicativos que resolvessem meus problemas. Tinha que utilizar um para despesas, uma planilha para investimentos e outras planilhas para suporte.
Objetivo: Criar funcionalidades que agreguem ao meu controle financeiro, de acordo com minhas necessidades. 

Instruções:

- Para rodar o DB, entre na pasta infra/db e execute no k8s na seguinte ordem:
    * kubectl apply -f db-configmap.yaml
    * kubectl apply -f db-pvc.yaml
    * kubectl apply -f db-service.yaml
    * kubectl apply -f db-statefull.yaml

- Para rodar o TransactionApp no k8s Local:
    * entre na pasta back\transaction e execute o comando:
        - ./mvnw spring-boot:build-image
    * entre na pasta infra\transaction e execute os scripts na sequinte ordem:
        - kubectl apply -f transaction-service.yaml
        - kubectl apply -f transaction-replica.yaml