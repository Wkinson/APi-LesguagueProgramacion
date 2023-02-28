// metodos que nos ayudaran con el mysql

//para la entrega de los datos (que es por medio con de paginas)
function getOffSet(currentPage=1, listPerPage) {
    return (currentPage - 1) * [listPerPage];
};

// verifcacion de row
function enptyorRow(rows) {
    if(!rows) {
        return [];
    };
    return rows;
};

module.exports= {getOffSet, enptyorRow};