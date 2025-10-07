//objects

const london = {
    firstName: "London",
    lastName: "Valentine",
    graduated: false,
    DOB: 2010,
    siblings: ["Paris" "Rio"],
    age: function() {
        return year - this.DOB;
    },
};

console.log(london.siblings);
//or
london.siblings.imcludes("Paris")



