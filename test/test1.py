rows = (('apollo', 'female', '13'), ('apollo', 'male', '12'))
names = 'username gender age'.split()
L=[list(e) for e in rows]
data = [dict(zip(names, d)) for d in L]

