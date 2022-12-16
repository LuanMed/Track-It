import dayjs from "dayjs";

export default function Date() {
    let day = '';
    const { $D, $M, $W } = dayjs()

    switch ($W) {
        case 0:
            day = "Domingo";
            break;
        case 1:
            day = "Segunda";
            break;
        case 2:
            day = "Terça";
            break;
        case 3:
            day = "Quarta";
            break;
        case 4:
            day = "Quinta";
            break;
        case 5:
            day = "Sexta";
            break;
        case 6:
            day = "Sábado";
            break;
    }

    return (
        <>
            {day}, {$D}/{$M+1}
        </>
    )
}
