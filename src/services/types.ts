type TAttr = 'agi' | 'str' | 'int'
type TAttackType = 'Ranged' | 'Melee'

interface IHero {
  id: number
  name: string
  localized_name: string
  primary_attr: TAttr
  attack_type: TAttackType
  roles: string[]
  legs: number
}

export type IGetHeroesResponse = IHero[]