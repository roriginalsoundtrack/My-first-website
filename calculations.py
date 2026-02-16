def basicpulleyacc():
    mass1 = 5
    mass2 = 7
    gravity = 9.81
    masstotal = mass1 + mass2
    acceleration1 = (mass2*gravity)/masstotal
    return acceleration1

bpaccres=basicpulleyacc()

print(bpaccres)

