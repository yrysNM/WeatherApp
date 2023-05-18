package com.weather.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.UniqueElements;

@Entity
@Table(name = "icons")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class IconEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int iconId;
    @UniqueElements
    String iconCode;
    String title;
}
