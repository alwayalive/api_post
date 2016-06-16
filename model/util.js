module.exports = {
    getQueryString(str, name, split = "&") {
        var reg = new RegExp(`(^|${split})${name}=([^${split}]*)(${split}|$)`, "i");
        //var reg = new RegExp("(^|" + split + ")" + name + "=([^" + split + "]*)(" + split + "|$)", "i");
        var r = str.match(reg);
        if (r != null)
            return unescape(r[2]);
        return null;
    }
}