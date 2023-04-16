import random

print("*************************************")
print("Bem vindo ao Jogo de adivinhação")
print("*************************************")


numero_secreto = random.randrange(1, 101)  
quantidade_de_tentativas = 0
pontos = 1000

print("Qual nível de dificuldade?", numero_secreto)
print("(1) Fácil (2) Médio (3) Difícil")

nivel = int(input("Define nível"))

if(nivel == 1):
    quantidade_de_tentativas = 20
elif(nivel == 2):
    quantidade_de_tentativas = 10
else:
    quantidade_de_tentativas = 5

for rodada in range (1, quantidade_de_tentativas +1):
    print("Testativa {} de {}".format(rodada, quantidade_de_tentativas)) #interpolação
    chute_str = input("digite seu numero: ")
    print("voce digitou ", chute_str)
    chute = int (chute_str)

    if (chute < 1 or chute > 100):
        print("você deve digitar um número entre 1 e 100!")
        continue

    acertou = chute == numero_secreto
    maior   = chute > numero_secreto
    menor   = chute < numero_secreto

    if (acertou):
        print("você acertou e fez {} pontos".format(pontos))
        break
    else:
        if(maior):
            print("Você errou! O seu chute foi maior do que o número secreto.")
        elif(menor):
            print("Você errou! O seu chete foi menor do que o número secreto.")
        pontos_perdidos = abs(numero_secreto - chute)
        pontos = pontos - pontos_perdidos
print("Fim do Jogo")
   