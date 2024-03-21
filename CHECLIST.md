# Setup inicial de um repósitorio do Github no visual studio code local

1.Ligar credencias do sistema
2.ligar os dados do navegaor 
3.abrir o repositório no GITHUB
4.Copiar a url do repositório (HTTPS)
5.Abrir o Vs code
6.Se houver algum projeto aberto no Vs code. então feche (control +K F)
7.Se houver algum projecto logado no Vs code, então "click em sair "
8.Verifique as variaveis `use.name` e `user.email` globais:
~~~~git
git conf --global user.name
git conf --global user.email
~~~~bash 
9.Se as variaveis rotornarem algum valor, redifina  ambas as variaveis:
~~~~
git conf --global --unset user.name
git conf --global --unset user.email
10.Faça a clonagem do repositório no computador local:
~~~~bash
git clone https://github.com/<usuario>/<repositorio>.git
~~~~
11.abra o projecto clonado no Vs code:
~~~~~bash
code -r <repositorio_local>/
~~~~~
12.Faça  login no Vs code local para sincronizar suas extensões e temas 
13.Ative o salvamento automático_(Auto Sone)_:Arquivo> Salvamento automatico











https://chatgpt4online.org/chatgpt-free-online/#chat