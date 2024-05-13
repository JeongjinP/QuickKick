package com.quick_kick.board.domain.repository;
import com.quick_kick.board.domain.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;




public interface BoardRepository extends JpaRepository<Board, Long> {
}
