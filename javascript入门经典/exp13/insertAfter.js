function insertAfter(newelement,targetelement) {
    var parentelement = targetelement.parentNode;
    if (parentelement.lastChild == targetelement) {
        parentelement.appendChild(newelement);
    }
    else {
        parentelement.insertBefore(newelement,targetelement.nextSilbing);
    }
}
