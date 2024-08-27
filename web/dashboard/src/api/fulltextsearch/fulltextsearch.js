import lunr from 'lunr'
import yaml from "js-yaml";
export function searchFullTextItems(items, keywords) {
    var itemsMap = {}
    var idx = lunr(function () {
        this.ref('uid')
        this.field('body')

        items.forEach(function (element) {
            itemsMap[element.metadata.uid] = element
            this.add({
                uid: element.metadata.uid,
                body: yaml.dump(element)
            })
        }, this)
    })

    return idx.search(keywords).map(function (result) {
        return itemsMap[result.ref]
    })
}