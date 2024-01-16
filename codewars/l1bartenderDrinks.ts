export function getDrinkByProfession(profession: string): string {
  const map: { [key: string]: string } = {
    jabroni: "Patron Tequila",
    "school counselor": "Anything with Alcohol",
    programmer: "Hipster Craft Beer",
    "bike gang member": "Moonshine",
    politician: "Your tax dollars",
    rapper: "Cristal",
  };

  return map[profession.toLowerCase()] || "Beer";
}
