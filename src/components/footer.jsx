import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () =>{

    const email = 'daroponce21@gmail.com'
    const asuntoEmail = 'Correo enviado desde el Portafolio'
    const msjPred = '[ESTE ES UN MENSAJE PREDETERMINADO PUEDES BORRARLO SI DESEAS] ...Buenos días mi nombre es [INSERTE SU NOMBRE], de la empresa [INSERTE EMPRESA] estuve mirando tu portafolios y queria contactarme contigo, te parecería bien el día [INSERTAR FECHA] en el horario de las [INSERTAR HORA] ...'

    const [cuerpoMensaje , setCuerpoMensaje] = useState(msjPred)

    const handleMail = () =>{
        const url = `mailto:${email}?subject=${encodeURIComponent(asuntoEmail)}&body=${encodeURIComponent(cuerpoMensaje)}`
        window.location.href = url
    }

    const cel= '1163710048'
    const msjWht = '[ESTE ES UN MENSAJE PREDETERMINADO PUEDES BORRARLO SI DESEAS] ...Buenos días mi nombre es [INSERTE SU NOMBRE], de la empresa [INSERTE EMPRESA] estuve mirando tu portafolios y queria contactarme contigo...'

    const handleWht = ()=>{
        const urlW = `https://api.whatsapp.com/send?phone=${cel}&text=${encodeURIComponent(msjWht)}`
        window.open(urlW, '_blank')
    }

    return(
        <footer>
        <div className="socials">
            <h2>Contactos</h2>
            <Link className="link-social" onClick={handleMail}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAA5hJREFUWEetWIuVGjEMHHVCKdAJVJJLJUAluXRCJw6y/Ldk65b4vTt4a1saS6ORWUIZBCAAyJ9pwngss3XtsKvfrE3GZ/quikk86GO/19xasPOXEcTS7jwpADNM80SK1U8OMO1ND8rzPjOfRZAICAo1xjzxksWwzpti5wmHrGn/r13+j1kyOLjDa6VowNQtW9lczNFUteLkVP92aO1IFWprSxqzBHoFCt9RROZDTgCuAO7eBB2GP298AXi+/X61AjbIDJ2B8KdUtkpsDnoQyTQKwSY8IXQb1ZUXAN/Z9KiDdwKum4LzBlddt0y77Pido5gjmQzF09xBuCZx5VPwadwjx8OfdskGBdxD9BtdPQDczAgCYA7m0Z3Gh3QU3e0u5tyvZtUDIAHI4GWinJmLowXIkxxJ3sAkdgx3/Fgp2N9Z3LPmRYbWCCaNaZ1qAHmewXG6TZB9c7JYXFYxOC5G/hyHluJlBLOBFwHPt+svQzsd0Y3ZukaupzHHmx5AcHGQU/tX+FHCz2aXvOy7R+7TBbtFIc5MpBYBj6AVSer5YkC85FCPJHalvERZbFW+9XHOh22BO6o4ASTglu4p5yCEjpwRTtMLCM83q6Py97XWPTgnvlVohBdCLLwsyD8EKKbGk5xCJDadhjYyCWtTIsvoN3Q4ArAnazo+R5C5UnQrOfkm4FKAEU5RfFlCGv5WfsmuCWBPrZIUS2ZKBBVlS5HpZrIUsT1NQjilbLMfYmIRwd77PcnAlGJFQ5KWNSkXbjXaFo2zPDGXywVAsWX6nS4LTSfpOGiI3JTyYV3p52p/qQ8TQCZE0GUmGdZD3VrXO5lWDGrxGB3nSJH0VWxLSZEUvkty8XBUGwlx9eYVwJzlqHj3N2euSekkxTv7RKDguIYaHNllzs9BA2gnGM2a/FVEffsWYVckxbIZ6rYNRKHeRdaImEHnPQfTRgdAzfNBtNVU5ze3WJ5uUhyd/AygiStNGClnx03XqUItaB6pT6udRJOLNb2LmdqBDSlx2EnXLcItn2AsknrzKO9cJvaVnwgfJ3Z+2cdPLkAwf3YymhJFldAOVP2SVsZURG1kp34tb2fmnxD7Vx8roGVusaif4ouG2qvHFC8ZZdxENA54+abEplNQ/e1W1lV5w6Ek2pFmF8LlInHSR9DjOBWPvdRjZIVsYPBRc9593Trvpga/ysFyP2nq54DtLWU9C5YpzlzUXiy6mvHyVOOkKmr4B9vodzzyt7xhAAAAAElFTkSuQmCC"/>
            </Link>
            
            <Link className="link-social" onClick={handleWht} target="_blank">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABEhJREFUWEe1WIt12zAMPExSZ5I6kzSZJO4kTidxOkm8CasjARKkQElOXvVeXvxEijwcDh9S8MAjAFI3f/Jm/XqyS5lo0/N/AaRuIpDDa+0Ysr3OEdOCDWQX4BcXfsAr0VTuyodE2u9vLjn7vHPetjjMvwrNf/mfwLllB0eMftmSx3cZPAF4geAnEvj7BMFdSeB//v0B8FHhUvWpBcaaHYEg1WAMAU4doxG2aOOySORtph9G4hDuBpTfqbL6fLAlknhMLW2W503PAK6Zqf4xtv5C8EPBcQ7n+6cB3fErU00YJN13/SJ05dUxM7AS2mkgfw1gfy+zlc1tTicaXJlH1l5K0GfXrDY4EGkvKgtjnwY+7X13JEjoppsuxEVfO9Hv7dCPExzXMpDvul4zvZMoA6YJP9qqAyfAcyqR2T272a53CMFdITirXF4Bec+RG+gyM7ih15tb6PkbzDmD8m6eyezqviq36YGLK1xqhtormhNcXIBYNHPsqy733qmujrwzU9Gn08poSBkrtjAJk92vPDcBziqbEjBDetsKEsukxTolVnI04+rSLF30DMjdsnMtq65tGjN3kZacE5IFYCihGcDqXgGehsDQKtIpt6Wd+tqPT1V+EuBT7QjdPAOoea+QPvjuDMhtYEStZ0qg24MyNo9EMkg99nmxeSyUjn1U9eWIOSGBGrRnmrT7sj+VqJERJu4ZgxYgjvaOgiu1qHmrzZmyFA/o28vSvrxphljhmQFUBuUDSFGEtjxWdtE0tJFRJwQuX1yWvsA6o2MABbilqgt5iiJQU5C5OjcOulkpT6WnoyGryjNgrXofzkv58BQzKHJBSlOr3AY+mXfdjXJpdZdaplYjsJ8QUNcfgDxH58a+rpQA9BvvlbixeTWgP4cWi+8Jkpr1BTbMtwZqpkG6xtz3DsFr7R7jRrgZtC3DMdfFRLg11gDtTcptkeUnsti5J08rxwtjo5xPIG8TzXJi80YGITdBYqmL8u365WD8oWIeBKcCBbto35zmpsLt0TcjQ4e952JDzzLETabdRgUYu9YD9LaohFz6n6ehaYbngCmO1qu44/kP5OjSsLYDlQvC9SqquHB57wK2QmE+O5Sa26Sx5S9lcmORWRRT+FcgEWTui9xRku8IdpPR0fVDxeDwtI/0NTwAWM0x93Khv/6grjMIkmP15sD3mvq7BoxATnZfsFSM3zz8H2E/rH1L/+fdG8eBX11w14O2XXFEh3Z68p52jgg96FI0VQLdkO8HbcIdgj9SWvxTgvwC0nhzoMboWu3EGBzyj/A3v36zKmLua5c/tXxnBRhTLGun5fioaSWPERSlQa2ukny+PrL7DVf5DLbJxTFYqPR3InFVm1u+xUndeHWv5NJWsMCgwa1ljrkkypJf/3LabpmZjy392OzNAtFFRi3KR27sWioZ4BxC98A36tvOxWOIb3Qle+a3/mRmdbdZn7P8vv8AEFKHQEXLyhgAAAAASUVORK5CYII="/>
            </Link>
            
            <Link className="link-social" to="https://www.linkedin.com/in/dario-ponce/" target="_blank">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAA81JREFUWEelWL2OFDEM/vICNDSUR4OE6EGiYempabkVr4Bo71Y0SIg3QNptaZGod1uor6Dbg1fgAcI4P5M4sSeeY6TTzWYc+8tn+0tmHIaXA+CZlTpSPehtRoEkrw40OgieHo8iGp473y61hG6nx98awGQ9Two3+dcIyYip/Jz7Iyi+yRRZdgyGkZBRK5Alu2Uf4wgCg/P64+xnAO47hxvv3R89QcYyMZLrHOBT2QeIQm08ArAH8LwC/Bke7+oYYwaitZY+C94+xXHWDwBPBQfvAfdJqhYJrHUBbVXWpEkAXwA4Kcz+AvDYsvJEnbUqmhopOZYAvp5AfFVA/IXDPdZsdcEomiWm2EivBPAJgBsF4AnAy1xZMz3GYE0D9iEEPwGgMP4FcG+FHeSVB75L4O0Y17TMkswAHwBsATwA8BPARwDf2tpaE85cu5WhxuBdfDVuZyGz729COjWZ6crMjtie7L62MpxyOJkZJOOs3gAu0l+L6xYA/eXKNdgF40sAJF9kT/N/BymL98mfTIHG4Dk468nYTW6uK1e021Dw9qLaPSTbqwVOCSTZFpANiVoNngF3wYsnhAkAq4B7B1wKZwsK+mZiaSODq0ajjj7UmFxmsGdGZbABQoxQOrtLYbPSV94pFcA4NTmIKV4B0N5EqmUuC6YGBgbZmq01KDVXt+CGzQMctu2ZtWMwdegZ8HdkkIWlbZHSly9qsCs59e7kwzbK9ZMzWDZ+nuIQszTJHMBhDy92MZls4XAQTvFa+VDdUrMMUhwJ+K8anDr71tfBMqnxf+l8UlOuv13JGWqQLWg3MdLrYN+aTVcyWkg3ST9TNbG32rUA6X2A/Mzvi7tp4LrSR02olwBupl3lWNAl/1E/BgBnJhxrkoqggQ7OlrSLbBXN28DhWNdmLdttA8UDF/9wQJVh6mIH7L281QWAiuJVDLYtEd7fhDapRpNcDwGm4tZSvMwgpVimV0hxSWtNpdrFk/l1tZ5FgGsZlD4kFMT5LkY3yExYWQWQORik2B3nbZUzGZ2IRZmaKL3zDgEmHyKDDjh4VoMMxVyD9Wi6X+7iaoKwk4S1lS6OxqtT7ICNTzIjlGHSteZEXWplntIzGLsiAZztVgOkM2LUwSaPEdNABwtSkcFpebvJj+VEXWqwx6HKDAeY9EQR02ENprWsYzAGMwLke02nmJ14SytJjSV9Hqu32ryZKbKz+CmSy0y/oyRt7NF1I2ygfarkSUXMu8JgttZEBpQJ5x+fku/2zSttVV3X2D/91qDV/K9dGd8B82FK87KcxtWxuwmWxP8DFHFaQF2tGo0AAAAASUVORK5CYII="/>
            </Link>


            <Link className="link-social" to="https://github.com/DaroPonce21" target="_blank">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAA/dJREFUWEetWIt12zAMPExSZ5Imm9iTOJ7E7iRxJ7E7CavjRwJBkKLzwvdaRyIEHA4fQhLoJQDCdsNcVqLxYkdAIAha4ciYVieAhASFJtRydhTgVbA85e1p1CMH8l4j4pDUMjPBjv+Qc7cyuBuTRoFhcBDvPqJjMisHIPzKYv/y7x3AE4JnvHYZHzvlA9x39Ajg92Kcv2mp7HBMEugFkCcQEtjJNWCwyU4S8L7wcEb6bapk3y+5A+GyPE/AnVUn5zTAhbGvDdik+5peurd5cEuM5tArz6yTMzl4AHDV4CaKU3nQlb4LcArMz5ibrRzv7DHYgBtyN2DCTZjE4EcuJLeI+gCTsW+FdT8XK7gryNLY9fMZoKvyMxeE1hYTXIBzAMgu/02sqJ959zcLX01EqZf2qiXsDB3tNPwwe/T0TeX9+3KOnSE4IKxVSQCH7C7b0AGCOwL+mMqlbuscQ91UdwVQ8eiFtgY4wdtAxNNPcKfY1M08YPUcAHk4GZsBbm68mGu66XzFntoqIMCbD3ATzrnnmu8WVR+su1OFWEncYuvRTapsKqHOiSmXhdU2kdM5nA9aA2a9vZRV1Lqq9gqwwGKeP7VGHWKvOLj/k/lX7D1ygdkUOwFyK86kkG2O8/DnqWEXE5hV5q/1+ZeyknbysFFF4LRUOFtShGVySj6BwGHALrdPNVLZjj9J2/YbemRUtmzS93JjAuCAPX/rCMjV6RZk79TLwQjQ0RcfAlt7mJ06M7993FNkWAZd2gW4BQIcLVvIFlgLdANY79kQp90sw0GUXb5eaTOWf9lwiZmpkSgT/1tDUVjKU9eHOjpTkRi9JoZryq/VtVvM+1RvRBjjkvJo7Zg2xFTtHeSlF6bZbWftRJe9llFqJ6F0Dm8DSWdgHXX5NLuJPGOEekj6oXYG4Eq46bcbg5uc9pCAOCpxdMovSpG++p3CY7SyK0cgrG+BPfwCvAUToRWgeUizyKoiIFa418RTC/JXCeUazkEd+UNrpyrrPBFclqwl6Cr82dioeGIxzBR3Hoab/PaKpGC2uVjajGYyDZlxdWGYoqvl8lVmr91jTbdfJLab6kCP77HNuLVX0akrxM8ijmg0xHecOIhUEhkDm5z7yU01z6sAx5COuZiPy/WTrX30cU3p7bUtYhpPSV6bSXib/sFDffsOU7/c9MewxFkEWJ0W6f4QXEEwykEbkvJ1QTfYOMjuFIHHYFP5vVRr2sygRzFHCK58POLfM5O2Bqj6Z98tHcWawcl+kI+pc65c0wMbJeVT3faxaFj0dU9wQqwNzCOeqOadbuRrqAC6HWrashH8Id8SwE6r+R42pewFkKPcH58DCuWMvUZm5qEBE/8BmNZePuIs4RsAAAAASUVORK5CYII="/>
            </Link>
        </div>
        <p>Dario Javier Ponce</p>
    </footer>

    )
}

export default Footer