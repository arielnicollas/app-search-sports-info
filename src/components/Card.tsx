interface cardProps {
    value: String;
}

export default function Card({ value } : cardProps) {

    return(
        <div>
          {value}
        </div>
    )
}